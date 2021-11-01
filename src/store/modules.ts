import { getModule } from 'vuex-module-decorators';
import App from '@/store/app';

const AppModule = getModule(App);

export { AppModule };
