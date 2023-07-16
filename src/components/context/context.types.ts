interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

interface FilteredProps {
  totalPages: number;
  baseUrl: string;
  getFilteredData: boolean;
  setGetFilteredData: React.Dispatch<React.SetStateAction<boolean>>;
  setGetNewData: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredMode: React.Dispatch<React.SetStateAction<boolean>>;
  selectFiltered: number;
  text: string;
}

interface contextCharacterProps {
  characterData: {
    character: CharacterProps[];
    totalPages: number;
  };
  getNewData?: boolean;
  setGetNewData?: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText?: React.Dispatch<React.SetStateAction<string>>;
  filteredMode?: boolean;
  setFilteredMode?: React.Dispatch<React.SetStateAction<boolean>>;
  getFilteredData?: boolean;
  setGetFilteredData?: React.Dispatch<React.SetStateAction<boolean>>;
  filteredPages?: number;
  filteredCharacterList?: CharacterProps[];
  selectFiltered?: number;
  setSelectFiltered?: React.Dispatch<React.SetStateAction<number>>;
}

interface infoContextProps {
  character:{
    info:{
      count:number;
    }
  },
  location:{
    info:{
      count:number;
    }
  },
  episode:{
    info:{
      count:number;
    }
  }
}


export type { CharacterProps, FilteredProps, contextCharacterProps, infoContextProps };
