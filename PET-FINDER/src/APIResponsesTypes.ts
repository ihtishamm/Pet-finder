 export type Animal = "dog" | "cat" | "bird" | "rabbit" | "reptile" ;
    
  export interface Pet {
    id: number;
    name: string;
    animal: Animal;
    breed: string;
    images: string[];
    city: string;
    state: string;
    description: string;
    }

      export  interface PetAPIResponse { 
        numberOfResults: number;
        startIndex: number;
        endIndex: number;
        hasNext: boolean;
        pets: Pet[];
        }

            export interface BreedAPIResponse {
                animal: Animal;
                breeds: string[];
                }
          