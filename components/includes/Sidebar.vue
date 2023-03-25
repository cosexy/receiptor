<template>
  <div id="sidebar">
    <nuxt-link to="/" class="logo">
      <h1>
        <img src="/images/logo.png" alt="logo">
      </h1>
    </nuxt-link>

    <a class="close" href="javascript:void(0)">
      <Icon name="ic:round-close" />
    </a>

    <ul class="menu _1">
      <li>
        <nuxt-link to="/invoices" class="_link" active-class="_active">
          <Icon class="_icon" name="material-symbols:credit-card-outline" />
          <span class="_label">
            Hoá Đơn
          </span>
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/messages" class="_link" active-class="_active">
          <Icon class="_icon" name="tabler:message-2" />
          <span class="_label">
            Tin Nhắn
          </span>
        </nuxt-link>
      </li>

      <li>
        <a class="_link" href="javascript:void(0)" @click="logOut">
          <Icon class="_icon" name="ion:log-out" />
          <span class="_label">
            Đăng Xuất
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

const logOut = async () => {
  await $fetch('/api/logout', {
    method: 'POST'
  })
  window.location.reload()
}
</script>

<style scoped lang="scss">
#sidebar {
  width: 280px;
  @apply bg-white h-screen shadow-primary relative;
  .logo {
    position: absolute;
    top: 20px;
    left: 32px;

    img {
      width: 45px;
    }
  }

  .close {
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 26px;
  }

  .menu {
    width: 100%;
    &._1 {
      position: relative;
      top: 100px;
    }

    li {
      width: 100%;
      ._link {
        @apply flex items-center py-5 px-5 transition border-l-4 border-transparent;
        &:hover {
          background-color: #f6f7fd;
        }
        &._active {
          @apply border-primary-600 bg-primary-50 text-primary-500;
        }

        ._icon {
          font-size: 22px;
          margin-right: 12px;
        }
        ._label {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
