import { defineStore } from "pinia";

export const useLoginStatusStore = defineStore("loginStatus", {
    state: () => ({
        is_logged_in: false,
        access_token: null,
        user_id: null,
        username: null,
        email: null,
        joined_at: null,
        user_status: "pending",
        n_bolt: 0,
        unlocked_course_ids: [],
        uploaded_syllabus_ids: [],
        uploaded_review_ids: [],
        invite_code: null,
        inviter_id: null,
        invitee_ids: [],
        inviter_code: null,
    }),
    persist: true
});