<!-- “最近在听”组件 -->
<template>
  <div class="recent-listen">
    <div class="recent-listen__label">最近在听</div>
    <div
      class="recent-listen__player pointer"
      tabindex="0"
      @click="toggleMusicPlay"
      @keydown.enter="toggleMusicPlay"
    >
      <div class="player__cover" ref="playerCover">
        <img
          :src="cover"
          alt=""
        />
      </div>
      <div class="player__control">
        <i v-if="!isMusicPlaying" class="iconfont icon-bofang"></i>
        <i v-else class="iconfont icon-zanting"></i>
      </div>
      <audio
        :src="music"
        loop
        ref="music"
      ></audio>
    </div>
  </div>
</template>

<script>
const artWork = require('../../public/music/Green is the Colour/index.jpg');
const musicSource = require('../../public/music/Green is the Colour/index.mp3');

export default {
  name: 'RecentListen',

  data() {
    return {
      cover: artWork,
      music: musicSource,
      isMusicPlaying: false,
      angle: 0,
      interval: null,
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {
    this.$refs.music.addEventListener('pause', this.pauseMusic);
    this.$refs.music.addEventListener('play', this.playMusic);
  },

  beforeDestroyed() {
    this.$refs.music.removeEventListener('play', this.playMusic);
    this.$refs.music.removeEventListener('pause', this.pauseMusic);
  },

  methods: {
    toggleMusicPlay() {
      if (this.isMusicPlaying) {
        this.$refs.music.pause();
      } else {
        this.$refs.music.play();
      }
    },

    playMusic() {
      this.isMusicPlaying = true;
      this.interval = setInterval(() => {
        this.angle += 0.4;
        if (Math.floor(this.angle) > 0 && Math.floor(this.angle) % 360 === 0) {
          this.angle = 0;
        }
        this.$refs.playerCover.style.transform = `rotate(${this.angle}deg)`;
      }, 10);
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: 'Green is the Colour',
        artist: 'Pink Floyd',
        album: 'More',
        artwork: [{ src: artWork }],
      });
    },

    pauseMusic() {
      this.isMusicPlaying = false;
      clearInterval(this.interval);
    },
  },
};
</script>

<style lang="scss" scoped>
.recent-listen {
  position: relative;
  width: 130px;
  height: 50px;
  border-radius: 25px;
  background: #4caf50;
  display: flex;
  align-items: center;
  user-select: none;
  &__label {
    padding-left: 8px;
    font-size: 14px;
    color: #fff;
  }
  &__player {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: #000;
    overflow: hidden;
    .player__cover {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .player__control {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      &:hover {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
      }
    }
  }
}
</style>
