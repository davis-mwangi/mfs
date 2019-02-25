import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render(){
      return (
        <Aux>
            <Toolbar/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
      );
  }

}
export default Layout;