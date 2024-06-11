export interface IEnvironment {
  app: {
    port: number;
  };
  isValid: () => boolean;
}

export const environment: IEnvironment = {
  app: {
    port: 3000,
  },
  isValid(): boolean {
    return true;
  },
};
