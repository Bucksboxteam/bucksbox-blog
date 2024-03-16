export type Category = {
  id: number;
  attributes: {
    title: string;
    active: boolean;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    blogs?: {
      data: Blog[];
    };
  };
};

export type Meta = {
  pagination: Pagination;
};
export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Blog = {
  id: number;
  attributes: {
    title: string;
    shortdescription: string;
    description: string | null;
    link: string | null;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image?: {
      data: Image[];
    };
    blog_categories?: {
      data: Category[];
    };
  };
};

type ImageSize = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
};

type ImageFormats = {
  large?: ImageSize;
  small?: ImageSize;
  medium?: ImageSize;
  thumbnail?: ImageSize;
};

export type Image = {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number;
    height?: number;
    formats?: ImageFormats;
    hash?: "business_91fb0e24a0";
    ext: ".jpg";
    mime: "image/jpeg";
    size?: number;
    url?: string;
    previewUrl?: string | null;
    provider?: string;
    provider_metadata?: null;
    createdAt: string;
    updatedAt: string;
  };
};
