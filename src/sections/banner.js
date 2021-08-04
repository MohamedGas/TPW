/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { Container, Box, Heading, Text, Image, Button ,Input} from 'theme-ui';
//import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import PropTypes from 'prop-types';
const  Banner =({submitSearch}) =>{

  const [location, setLocation] = useState('');

   

  const onSubmit = e => {
      e.preventDefault();
      if (!location || location === '') return;
      submitSearch(location);
  };
     
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.Container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Start Your Journey With Us Today
          </Heading>
          <Text as="p" variant="heroSecondary">
            Check out our website to plan your next trip! Get your destination's weather, packing list and tourist recommendations all in one!
          </Text>
          {/* <Button variant="primary">Enter Your Destination</Button> */}
           
        
          <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>

        </Box>
        {/* {<Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt='banner'/>
        </Box> } */}
      </Container>
    </section>
  );
}
Banner.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};
const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
export default Banner;