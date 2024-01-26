export type ArtworkItemRes = {
  id: string;
  title: string;
  artist_display: string;
  date_display: string;
  image_id: string;
  thumbnail: string;
  place_of_origin: string;
};

export type ArtworksRes = {
  json(): unknown;
  data: ArtworkItemRes[] | undefined;
  total: number;
  pageSize: number;
  page: number;
};

export default class ArtService {
  static getArtworks = async (): Promise<ArtworksRes> => {
    const url = `https://api.artic.edu/api/v1/artworks?&limit=40&fields=id,title,artist_display,date_display,image_id,thumbnail,place_of_origin'`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch artworks: ${response.statusText}`);
      }

      const responseBody: ArtworksRes = await response.json();

      return responseBody;
    } catch (error: any) {
      throw new Error(`Error fetching artworks: ${error.message}`);
    }
  };
}
