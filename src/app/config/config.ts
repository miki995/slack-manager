import { environment } from '../../environments/environment';

interface IConfig {
  apiEndpoint: string;
  redirectUri?: string;
}

const config: IConfig = {
  apiEndpoint: environment.api,
  redirectUri: environment.redirectUri,
};

export { config };
