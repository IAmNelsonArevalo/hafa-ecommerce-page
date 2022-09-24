interface IReferencesImages {
  url: string;
}

export interface IReferences {
  sku: string;
  reference: string;
  reference_value: string;
  references_images: Array<IReferencesImages>;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  feature: string;
  references: Array<IReferences>;
}
