import { put, takeEvery, all } from "redux-saga/effects";

// function* helloSaga() {
//   console.log("Hello Sagas!");
// }

const Fetch = async () => {
  try {
    const response = await fetch(
      "https://memes-gallery-api.herokuapp.com/memes"
    );
    const data = await response.json();
    return [response.status, data];
  } catch (error) {
    return [500, error];
  }
};

function* fetchMemes() {
  console.log("fetching memes...");
  const [status, data] = yield Fetch();
  if (status !== 200) {
    yield put({
      type: "ON_ERROR",
      payload: data.message,
    });
  } else {
    yield put({
      type: "GET_MEMES",
      payload: data,
    });
  }
}

function* watchFetchMemes() {
  yield takeEvery("FETCH", fetchMemes);
}

export function* rootSaga() {
  yield watchFetchMemes();
  //   yield all([helloSaga(),watchFetchMemes()])
}
