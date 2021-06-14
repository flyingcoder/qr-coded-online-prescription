<template>
  <div class="sales-report-page">
    <div class="sales-report">
      <div class="left">
        <div class="icon">
          <v-icon color="white" size="50px">mdi-currency-php</v-icon>
        </div>
        <div class="percentage">20.78%</div>
        <div class="subtitle-text">Sales Rate</div>
      </div>
      <div class="right">
        <v-sparkline
          :value="sales_value"
          :gradient="gradient"
          :padding="padding"
          line-width="4px"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
          :show-labels="showLabels"
          :label-size="labelSize"
        ></v-sparkline>
      </div>
    </div>
    <div class="orders-rate">
      <div class="left">
        <div class="icon">
          <v-icon color="white" size="50px">mdi-cart-outline</v-icon>
        </div>
        <div class="percentage">28.76%</div>
        <div class="subtitle-text">Orders Rate</div>
      </div>
      <div class="right">
        <v-sparkline
          :value="rate_value"
          :gradient="gradient"
          :padding="padding"
          line-width="4px"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
          :show-labels="showLabels"
          :label-size="labelSize"
        ></v-sparkline>
      </div>
    </div>
    <div class="income-rate">
      <div class="left">
        <div class="icon">
          <v-icon color="white" size="50px">mdi-currency-php</v-icon>
        </div>
        <div class="percentage">64.76%</div>
        <div class="subtitle-text">Income Rate</div>
      </div>
      <div class="right">
        <v-sparkline
          :value="income_value"
          :gradient="gradient"
          :padding="padding"
          line-width="4px"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
          :show-labels="showLabels"
          :label-size="labelSize"
        ></v-sparkline>
      </div>
    </div>
  </div>
</template>

<script src="./sales-report.js"></script>

<style lang="scss" scoped src="./sales-report.scss"></style>
