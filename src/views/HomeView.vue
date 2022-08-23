<template>
  <div class="websiteContainer">
    <IntroductionSection />
    <PortfolioSection />
  </div>
</template>

<script>
import IntroductionSection from "@/components/bodySections/IntroductionSection.vue";
import PortfolioSection from "@/components/bodySections/PortfolioSection.vue";
export default {
  name: "HomeView",
  components: {
    IntroductionSection,
    PortfolioSection,
  },
};
</script>
