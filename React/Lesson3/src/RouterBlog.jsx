// rcc(class)
// rfc(funciton)
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Main from './component/Main';

// ROUTER
import { Navigate, Route, Routes } from 'react-router-dom';

// HEADER , FOOTER
import Header from './component/Header';
import Footer from './component/Footer';

// Component CRUD
import BlogList from './component/blog/BlogList';
import BlogUpdate from './component/blog/BlogUpdate';
import BlogCreate from './component/blog/BlogCreate';
import BlogView from './component/blog/BlogView';





class RouterBlog extends Component {

    // DisplayName
    static displayName = "Router_Blog";

    // CONSTRUCTOR
    constructor(props) {
        super(props);

        // STATE
        this.state = {};
        // BİND

        // DATE DATA
        this.date = () => {
            return "2023"
        };

        //LOGO DATA
        this.logoFunc = () => {
            return "fa-solid fa-blog"
        };

    }

    

    // CDM

    // FUNCTİON

    // RENDER
    render() {
        return (
            <React.Fragment>

                {/* HEADER */}
                <Header logo={this.logoFunc()} />

                <div className="container">
                    <Routes>
                        <Route path='/' element={<Main />} />

                        {/* Blog CRUD */}
                        <Route path='/blog/list' element={<BlogList />} />
                        <Route path='/blog/create' element={<BlogCreate />} />
                        <Route path='/blog/view/:id' element={<BlogView />} />
                        <Route path='/blog/update/:id' element={<BlogUpdate />} />

                        {/* For Bad Request */}
                        <Route path='*' element={<Navigate to="/" />} />
                    </Routes>
                </div>


                {/* FOOTER */}
                <Footer falan = {this.date()} />


            </React.Fragment>
        )
    }
}

// Higher Order Component
export default withTranslation()(RouterBlog);

