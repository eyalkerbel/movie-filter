import React, { createContext, useContext, useEffect, useState, useMemo, ReactNode } from 'react';
import {Genre, Video} from "../../types";
import {fetchData} from "../../api";


interface FilterState {
  searchQuery: string;
  selectedYear: string;
  selectedGenres: Genre[];
}

interface VideoContextType {
  genres: Genre[];
  videos: Video[];
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  filteredVideos: Video[];
  years: number[];
  loading: boolean;

}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

interface VideoProviderProps {
  children: ReactNode;
}

export const VideoProvider: React.FC<VideoProviderProps> = ({ children }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedYear: '',
    selectedGenres: [],
  });
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    fetchData().then(({ genres, videos }) => {
      setGenres(genres);
      setVideos(videos);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });;
  }, []);

  const filteredVideos = useMemo(() => videos.filter(video => {
    if (typeof video.title !== "string") {
      return false;
    }
    const matchesSearchQuery = filters.searchQuery === '' || video.artist.toLowerCase().includes(filters.searchQuery.toLowerCase()) || video.title.toLowerCase().includes(filters.searchQuery.toLowerCase());
    const matchesYear = filters.selectedYear === '' || video.release_year.toString() === filters.selectedYear;
    const matchesGenres = filters.selectedGenres.length === 0 || filters.selectedGenres.some(genre => genre.id === video.genre_id);
    return matchesSearchQuery && matchesYear && matchesGenres;
  }), [videos, filters]);

  const years = useMemo(() => [...new Set(videos.map(video => video.release_year))].sort((a, b) => a - b), [videos]);

  return (
    <VideoContext.Provider value={{ genres, videos, filters, setFilters, filteredVideos, years, loading }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
};
