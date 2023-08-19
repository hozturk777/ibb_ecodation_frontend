import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'

// Api
import BlogApi from '../../services/BlogApi';

class BlogList extends Component {

  // Component isim
  static displayName = "Blog_List";

  // Constructor
  constructor(props) {
    super(props)

    // STATE
    this.state = {
      bloglist: [],
    };

    // BIND
  }

  // CDM
  componentDidMount() {
    // Değer dönüyorsa then dönmüyorsa catch(hata)
    BlogApi.blogServiceList()
      .then((response) => {
        console.log(response);
        this.setState({
          bloglist: response.data
        });
      })
      .catch((err) => {
        console.log('Error:', err)
      });
  }// end CDM

  // FUNCTION

  render() {

    // object destructing
    const { t } = this.props;
    const { bloglist } = this.state;

    return (
      <React.Fragment>
        {/* h1.text-center.display-4.text-uppercase{Blog List} */}
        <h1 className="text-center display-4 text-uppercase">Blog List</h1>
        {/* table.table.table-hover.table-stripped>thead>tr>th{item $}*4^^tbody>tr>td{item $}*4 */}
        <table className="table table-hover table-stripped">
          <thead>
            <tr>
              <th>{t('book')}</th>
              <th>{t('pageCount')}</th>
              <th>{t('author')}</th>
              <th>{t('genre')}</th>
              <th>{t('date')}</th>
              <th>{t('update')}</th>
              <th>{t('view')}</th>
              <th>{t('delete')}</th>
            </tr>
          </thead>
          <tbody>
            
            {
              // index verme sebebi datanın id si olmaması
              bloglist.map((temp, index) =>
                <tr key={index} >
                  <td>{temp.title}</td>
                  <td>{temp.pageCount}</td>
                  <td>{temp.author}</td>
                  <td>{temp.genre}</td>
                  <td>{temp.publishDate}</td>
                  <td><i className="fa-solid fa-pen-to-square text-primary" style={{ "cursor": "pointer" }}></i></td>
                  <td><i className="fa-solid fa-eye text-success" style={{ "cursor": "pointer" }}></i></td>
                  <td><i className="fa-solid fa-trash text-danger" style={{ "cursor": "pointer" }}></i></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default withTranslation()(BlogList);
