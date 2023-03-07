class NuxtAxiosInstance {
  static instance;

  constructor() {
    if (NuxtAxiosInstance.instance) {
      return NuxtAxiosInstance.instance;
    }

    this.baseUrl = "http://127.0.0.1:8000/api";
    NuxtAxiosInstance.instance = this;
  }

  getInstance() {
    return this
  }
}