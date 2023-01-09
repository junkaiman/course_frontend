import conf from "../conf";
import axios from "axios";
// import { Pinia } from "pinia";
// import { useLoginStatusStore } from "../stores/login_status";
// import { usePostReviewStore } from "../stores/post_review";
// const loginStatusStore = useLoginStatusStore();
// const postReviewStore = usePostReviewStore();

export default {
  getAuthorizeUri() {
    return `${conf.auth_url}?client_id=${conf.client_id}&scope=${conf.scope}&redirect_uri=${conf.redirect_uri}&response_type=${conf.response_type}`;
  },

  async login(code, inviter_code) {
    try {
      let response = await axios.get(
        `/api/login?code=${code}&inviter_code=${inviter_code}`
      );
      return { access_token: response.data.access_token, user: response.data.user };
    } catch (e) {
      console.log("login error", e)
      return null;
    }
  },
  async uploadSyllabus(course_id, course_prof, course_section, file, access_token) {
    try {
      let formData = new FormData();
      formData.append('course_id', course_id);
      formData.append('course_prof', course_prof);
      formData.append('course_section', course_section);
      formData.append('data', file);
      // console.log("this is file", file)
      // console.log("this is formData", formData)
      let response = await axios.post(`/api/syllabus/submit`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${access_token}`
        }
      })
      if (response.data.syllabus_id) {
        return response.data.syllabus_id
      } else {
        return null
      }

    } catch(e) {
      console.log('uploadSyllabus error', e)
      return null
    }
  },
};
