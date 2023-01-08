import conf from "../conf";

export default {
  getAuthorizeUri() {
    return `${conf.auth_url}?client_id=${conf.client_id}&scope=${conf.scope}&redirect_uri=${conf.redirect_uri}&response_type=${conf.response_type}`;
  },
};
