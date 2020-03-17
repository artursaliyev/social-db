export default class BaseHttpService {
  delay = ms => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, ms)
    );
  };
}
