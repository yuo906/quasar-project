<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
        <q-tabs v-model="tab" dense>
          <q-route-tab to="/" name="home" icon="home" label="home" />
          <q-route-tab to="/blog" name="blog" icon="article" label="Blog" />
          <q-route-tab to="login" name="login" icon="login" label="Login" />
          <q-route-tab to="order" name="order" icon="order" label="Order" />
          <q-route-tab to="/register" name="register" icon="account_circle" label="Register" />

          <q-btn-dropdown auto-close stretch flat>
            <template v-slot:label>
              <div>
                <div class="row justify-around items-center no-wrap">
                  <q-icon name="settings" />
                </div>
                <div class="row items-center no-wrap">
                  More...
                </div>
              </div>
            </template>

            <q-list>
              <q-item clickable @click="confirm = true">
                <q-item-section>Logout</q-item-section>
              </q-item>

              <q-dialog v-model="confirm" persistent>
                <q-card>
                  <q-card-section class="row items-center">
                    <q-avatar icon="logout" color="primary" text-color="white" />
                    <span class="q-ml-sm">Are you sure logout now?</span>
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="primary" v-close-popup />
                    <q-btn flat label="Logout" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>


              <q-item clickable @click="tab = 'settings'">
                <q-item-section>Settings</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref, onMounted } from 'vue'

const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    const confirm = ref(false)

    onMounted(() => {

    })

    return {
      menuList,
      leftDrawerOpen,
      confirm,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
}
</script>
