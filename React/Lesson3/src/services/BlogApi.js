// Axios
import axios from "axios";

// Persist  URL
const BLOG_URL = "/blog/api/v1";

class BlogApi {

    /////////////////////////////////////////////////////////////////////
    // ALL CREATE
    // http://localhost:4444/blog/api/v1/speed/10
    speedData(data) {
        return axios.get(`${BLOG_URL}/speed/10`);
    }

    // ALL DELETE
    // http://localhost:4444/blog/api/v1/delete/all
    allDelete() {
        return axios.delete(`${BLOG_URL}/delete/all`);
    }

    /////////////////////////////////////////////////////////////////////
    // CREATE
    // http://localhost:4444/blog/api/v1/create
    blogServiceCreate(blogDto) {
        return axios.post(`${BLOG_URL}/create`, blogDto);
    }

    // LIST
    // http://localhost:4444/blog/api/v1/list
    blogServiceList() {
        return axios.get(`/Book/list`);
    }

    blogAuthorList() {
        return axios.get(`/Author`);
    }

    // FIND BY ID
    // http://localhost:4444/blog/api/v1/find/1
    blogServiceFindById(id) {
        return axios.get(`${BLOG_URL}/find/${id}`);
    }

    // DELETE
    blogServiceDeleteId(id) {
        return axios.delete(`${BLOG_URL}/delete/${id}`);
    }

    // UPDATE https://localhost:44396/Book/update/1
    // C#
    blogServiceUpdateId(id, blogDto) {
        return axios.put(`/Book/update/${id}`, blogDto)
    }
    // JAVA
    // blogServiceUpdateId(id, blogDto) {
    //     return axios.put(`${BLOG_URL}/update/${id}`, blogDto);
    // }
} //end class

export default new BlogApi();