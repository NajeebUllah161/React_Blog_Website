import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Admin Pages
import Dashboard from './components/pages/admin/Dashboard';
import Users from './components/pages/admin/Users';
import Posts from './components/pages/admin/Posts';
import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';
import AddPost from './components/pages/admin/AddPost';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Blog from './components/pages/Blog';
import Single from './components/pages/Single';
import Signup from './components/pages/Signup';


class App extends Component {
  render() {
    return (
      <Router>

        <Route
          path="/admin/users"
          render={props => {
            return (
              <div>
                {
                  this.props.auth.token ?
                    <AdminWrapper>
                      <Users />
                    </AdminWrapper>
                    :
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                }
              </div>
            )
          }}
        />

        <Route
          path="/admin/posts/:view/:id"
          exact={true}
          render={props => {
            return (
              <div>
                {
                  this.props.auth.token ?
                    <AdminWrapper>
                      <AddPost />
                    </AdminWrapper>
                    :
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                }
              </div>
            )
          }}

        />

        <Route
          path="/admin/posts/:view"
          exact={true}
          render={props => {
            return (
              <div>
                {
                  this.props.auth.token ?
                    <AdminWrapper>
                      <AddPost />
                    </AdminWrapper>
                    :
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                }
              </div>
            )
          }}

        />

        <Route
          path="/admin/posts"
          exact={true}
          render={props => {
            return (
              <div>
                {
                  this.props.auth.token ?
                    <AdminWrapper>
                      <Posts />
                    </AdminWrapper>
                    :
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                }
              </div>
            )
          }}
        />

        <Route
          exact={true}
          path="/signup"
          render={props => {
            if (this.props.auth.token) {
              return (
                <Redirect to="/" />
              )
            } else {
              return (
                <LoginWrapper>
                  <Signup />
                </LoginWrapper>
              )
            }
          }}

        />

        <Route
          exact={true}
          path="/admin"
          render={props => {
            return (
              <div>
                {
                  this.props.auth.token ?
                    <AdminWrapper>
                      <Dashboard />
                    </AdminWrapper>
                    :
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                }
              </div>
            )
          }}
        />

        <Route
          exact={true}
          path="/"
          render={props => (
            <PageWrapper>
              <Home {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/blog/:slug"
          exact={true}
          render={props => (
            <PageWrapper>
              <Single {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/blog"
          exact={true}
          render={props => (
            <PageWrapper>
              <Blog {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/about"
          render={props => (
            <PageWrapper>
              <About {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/services"
          render={props => (
            <PageWrapper>
              <Services {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/portfolio"
          render={props => (
            <PageWrapper>
              <Portfolio {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/team"
          render={props => (
            <PageWrapper>
              <Team {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/contact"
          render={props => (
            <PageWrapper>
              <Contact {...props} />
            </PageWrapper>
          )}
        />

      </Router >
    );
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
