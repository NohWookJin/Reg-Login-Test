// 공통 액션 처리 로직 관리(로그인, 회원가입)

// 회원가입, 로그인 로직
export const handleAsyncAction = (builder, action, stateKey) => {
  builder.addCase(action.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(action.fulfilled, (state, { payload }) => {
    state.loading = false;
    state[stateKey] = payload;
    state.authError = null;
  });
  builder.addCase(action.rejected, (state, { payload }) => {
    state.loading = false;
    state.authError = payload;
    console.log(stateKey, payload);
  });
};

export const loginAsyncAction = (builder, action, stateKey) => {
  builder.addCase(action.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(action.fulfilled, (state, { payload }) => {
    state.loading = false;
    state[stateKey] = payload;
    state.userError = null;
  });
  builder.addCase(action.rejected, (state, { payload }) => {
    state.loading = false;
    state.userError = payload;
  });
};

export const userAsyncAction = (builder, action, stateKey) => {
  builder.addCase(action.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(action.fulfilled, (state, { payload }) => {
    state.loading = false;
    state[stateKey] = payload;
    state.userError = null;
  });
  builder.addCase(action.rejected, (state, { payload }) => {
    state.loading = false;
    state.userError = payload;
  });
};
