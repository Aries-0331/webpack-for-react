import React from "react";
import { Link } from "react-router-dom";
import { Header, Container, Divider, Icon } from "semantic-ui-react";

import styles from "./Layout.css";

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={styles.h1}>
          webpack-for-react
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={styles.pullRight}>
        Made with <Icon name="heart" color="red" /> by Aries
      </p>
    </Container>
  );
};

export default Layout;
