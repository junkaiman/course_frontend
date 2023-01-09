import { defineStore } from "pinia";

export const usePostReviewStore = defineStore("postReview", {
    state: () => ({
        course_id: null,
        course_code: null,
        course_name: null,
        course_prof: null,
        course_section: null,
        rating_general: 0,
        rating_workload: 0,
        rating_difficulty: 0,
        rating_teaching: 0,
        rating_grading: 0,
        rating_helpful: 0,
        review: null,
        syllabus_file: null
    }),
});