const BASE_URL = "https://forum-api.dicoding.dev/v1";

async function customFetch(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "An error occurred");
  }

  return data;
}

function getAuthHeader() {
  const token = localStorage.getItem("accessToken");
  return { Authorization: `Bearer ${token}` };
}

const api = (() => {
  const putAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
  };

  const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };

  const register = async ({ name, email, password }) => {
    const url = `${BASE_URL}/register`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    };

    return await customFetch(url, options);
  };

  const login = async ({ email, password }) => {
    const url = `${BASE_URL}/login`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    const { data } = await customFetch(url, options);
    return data.token;
  };

  const getOwnProfile = async () => {
    const url = `${BASE_URL}/users/me`;
    const options = {
      headers: getAuthHeader(),
    };

    return await customFetch(url, options);
  };

  const getAllUsers = async () => {
    const url = `${BASE_URL}/users`;

    return await customFetch(url);
  };

  const getAllThreads = async () => {
    const url = `${BASE_URL}/threads`;

    return await customFetch(url);
  };

  const getDetailThread = async (id) => {
    const url = `${BASE_URL}/threads/${id}`;

    return await customFetch(url);
  };

  const createThread = async ({ title, body, category }) => {
    const url = `${BASE_URL}/threads`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeader() },
      body: JSON.stringify({ title, body, category }),
    };

    return await customFetch(url, options);
  };

  const createComment = async (content, threadId) => {
    const url = `${BASE_URL}/threads/${threadId}/comments`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeader() },
      body: JSON.stringify({ content }),
    };

    return await customFetch(url, options);
  };

  const addThreadVote = async (threadId, voteType) => {
    const url = `${BASE_URL}/threads/${threadId}/${voteType}`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeader() },
    };

    return await customFetch(url, options);
  };

  const addCommentVote = async (threadId, commentId, voteType) => {
    const url = `${BASE_URL}/threads/${threadId}/comments/${commentId}/${voteType}`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeader() },
    };

    return await customFetch(url, options);
  };

  const getLeaderboard = async () => {
    const url = `${BASE_URL}/leaderboards`;
    const options = {
      headers: getAuthHeader(),
    };

    return await customFetch(url, options);
  };

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllThreads,
    getDetailThread,
    createThread,
    createComment,
    addThreadVote,
    addCommentVote,
    getLeaderboard,
  };
})();

export default api;
