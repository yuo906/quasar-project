<template>
  <q-form action="" method="get" id="commentForm">
    <div class="flex column">
      <img src="./01.png" alt="avatar" class="avatar" />
      <label for="username">Username</label>
      <input type="text" name="" id="username" />
      <label for="password">Password</label>
      <input type="text" name="" id="password" />
      <button>Login</button>
      <label class="remember"><input type="checkbox" name="remember" id="remember" /> Remember me</label>
      <div class="form__footer">
        <button>Cancel</button>
        <p>Forgot <a href="">password?</a></p>
      </div>
    </div>
  </q-form>
</template>
