import '../styles/globals.scss';
import ContentLayout from '../shared/layout-components/layout/content-layout';
import Authenticationlayout from "../shared/layout-components/layout/authentication-layout";
import Landinglayout from '@/shared/layout-components/layout/landing-layout';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';

const layouts:any = {

  Contentlayout: ContentLayout,
  Landinglayout: Landinglayout,
  Authenticationlayout: Authenticationlayout,

};
function MyApp({ Component, pageProps }:any) {
  
  const Layout = layouts[Component.layout] || ((pageProps: any) => <Component>{pageProps}</Component>);

  return (

    <Layout>
      <Component {...pageProps} />
      <ProgressBar
        height="4px"
        color="#845adf"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Layout>
    
  )
}

export default MyApp;