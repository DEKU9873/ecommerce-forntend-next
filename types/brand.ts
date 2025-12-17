import { StaticImageData } from "next/image";

export interface IBrand {
  id: string;
  name: string;
  image: string | StaticImageData;
    createdAt?: string;
  updatedAt?: string;
}

