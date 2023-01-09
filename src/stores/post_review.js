import { defineStore } from "pinia";

export const usePostReviewStore = defineStore("postReview", {
    state: () => ({
        course_id: null,
        course_code: null,
        course_name: null,
        course_prof: null,
        course_section: null,
        rating_general: null,
        rating_workload: null,
        rating_difficulty: null,
        rating_teaching: null,
        rating_grading: null,
        rating_helpful: null,
        review: null,
        syllabus_file: null
    }),
});