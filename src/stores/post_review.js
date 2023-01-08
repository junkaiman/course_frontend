import { defineStore } from "pinia";

export const usePostReviewStore = defineStore("postReview", {
    state: () => ({
        course_code: "",
        course_name: "",
        course_prof: "",
        course_section: "",
        rating_general: 0,
        rating_workload: 0,
        rating_difficulty: 0,
        rating_teaching: 0,
        rating_grading: 0,
        rating_helpful: 0,
        review: "",
        syllabus_filename: ""
    }),
});