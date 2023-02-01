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
      return {
        access_token: response.data.access_token,
        user: response.data.user,
      };
    } catch (e) {
      console.log("login error", e);
      return null;
    }
  },
  async uploadSyllabus(
    course_id,
    course_prof,
    course_section,
    file,
    access_token
  ) {
    try {
      let formData = new FormData();
      formData.append("course_id", course_id);
      formData.append("course_prof", course_prof);
      formData.append("course_section", course_section);
      formData.append("data", file);
      // console.log("this is file", file)
      // console.log("this is formData", formData)
      let response = await axios.post(`/api/syllabus/submit`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (response.data.syllabus_id) {
        return response.data.syllabus_id;
      } else {
        return null;
      }
    } catch (e) {
      console.log("uploadSyllabus error", e);
      return null;
    }
  },

  async postReview(
    course_id,
    course_prof,
    course_section,
    rating_general,
    rating_workload,
    rating_difficulty,
    rating_teaching,
    rating_grading,
    rating_helpful,
    review_content,
    access_token
  ) {
    try {
      let response = await axios.post(
        `/api/review/submit`,
        {
          course_id: course_id,
          course_prof: course_prof,
          course_section: course_section,
          rating_general: rating_general,
          rating_workload: rating_workload,
          rating_difficulty: rating_difficulty,
          rating_teaching: rating_teaching,
          rating_grading: rating_grading,
          rating_helpful: rating_helpful,
          review_content: review_content,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (response.data.review_id) {
        return response.data.review_id;
      } else {
        return null;
      }
    } catch (e) {
      console.log("postReview error", e);
      return null;
    }
  },
  async getUserProfile(access_token) {
    try {
      let response = await axios.get(`/api/user/get-profile`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log("getUserProfile response", response);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (e) {
      console.log("getUserProfile error", e);
      return null;
    }
  },

  async getWaitlistStatus(access_token) {
    try {
      let response = await axios.get(`/api/user/get-waitlist-status`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.log("getWaitlistStatus error", error);
      return null;
    }
  },

  async getUserCount() {
    try {
      let response = await axios.get(`/api/stats/get-user-count`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.log("getUserCount error", error);
      return null;
    }
  },
  async getReviewCount() {
    try {
      let response = await axios.get(`/api/stats/get-review-count`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.log("getReviewCount error", error);
      return null;
    }
  },

  async getSyllabusCount() {
    try {
      let response = await axios.get(`/api/stats/get-syllabus-count`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.log("getSyallbusCount error", error);
      return null;
    }
  },

  async getCourseStats(course_id) {
    try {
      let response = await axios.get(`/api/stats/get-course-stats/${course_id}`);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.log("getCourseStats error", error);
      return null;
    }
  },
  async unlockCourse(access_token, course_id) {
    try {
      let response = await axios.post(`/api/course/unlock/${course_id}`, {}, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.log("unlockCourse error", error);
      return null;
    }
  },
  async getCourse(access_token, course_id) {
    try {
      let response = await axios.get(`/api/course/get/${course_id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.log("getCourse error", error);
      return null;
    }
  },
};
