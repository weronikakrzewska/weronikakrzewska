import React from "react";
import { Container, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="bg-primary" id='contact'>
<div className="text-center inline">
     <Container fluid>
      <ul className='list-inline'>
        <li className="list-inline-item">
          Email: <a href="mailto:wkrzewska@gmail.com">wkrzewska@gmail.com</a>
        </li>
        <li className="list-inline-item">
          <a href="#!">Facebook</a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.instagram.com/que_wera/" target="_blank">Instagram</a>
        </li>
      </ul>
    </Container>
</div>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      Weronika Krzewska
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;