<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(noti, idx) in notificationList"
        :key="noti.version"
        :timestamp="noti.date"
        :placement="(idx === 0) ? 'top' : ''"
      >
        <notification-card :version="noti.version" :update-list="noti.updateList"></notification-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import NotificationCard from '@popup/components/notification/NotificationCard.vue';
import notificationList from '@/assets/data/notifications.json';

export default {
  components: {
    NotificationCard,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>
