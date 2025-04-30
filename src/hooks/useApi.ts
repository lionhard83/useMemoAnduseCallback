// valore di default, un array contenente il refiremento al valore e il dispatcher

import axios from "axios";
import { useEffect, useState } from "react";

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string; // ISO 8601 date-time
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[]; // array di URL dei personaggi
  url: string;
  created: string; // formato ISO (es. "2017-11-10T12:42:04.162Z")
};

export type Episode = {
  id: number;
  name: string;
  air_date: string; // es. "December 2, 2013"
  episode: string; // es. "S01E01"
  characters: string[]; // array di URL ai personaggi
  url: string;
  created: string; // ISO 8601 datetime string
};

type ResponseApi<T> = {
  info: {
    count: number;
    pages: number;
    prev: string;
    next: string;
  };
  results: T[];
};

const useApi = <T>(
  resource: "character" | "episode" | "location",
  page: number
) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<T[]>([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get<ResponseApi<T>>(
        `https://rickandmortyapi.com/api/${resource}?page=${page}`
      )
      .then((value) => {
        setValues(value.data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [resource, page]);
  return [values, loading] as [T[], boolean];
};

export const useCharacters = (page: number) =>
  useApi<Character>("character", page);
export const useEpisodes = (page: number) => useApi<Episode>("episode", page);
export const useLocations = (page: number) =>
  useApi<Location>("location", page);
