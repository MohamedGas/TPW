import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Weather from '../sections/weather';
import PackingList from '../sections/packing-list';
import Tourist from '../sections/tourist';
import useForecast from "../hooks/useForecast"
import Loader from '../components/Loader/Loader'
import Forecast from 'components/Forecast/Forecast';
export default function IndexPage() {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = value => {
      submitRequest(value);
  };
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="SJH Trip Planner" />
          {!forecast && (
                <div  >
                    {/* Form */}
                    {!isLoading && <Banner submitSearch={onSubmit} />}
                    {/* Error */}
                    {isError && <Error message={isError} />}
                    {/* Loader */}
                    {isLoading && <Loader />}
                </div>
            )}
            {/* Forecast */}
             {forecast && <Forecast forecast={forecast} />} 
          <Weather />
          <PackingList />
          <Tourist />
        </Layout>
    </ThemeProvider>
  );
}
