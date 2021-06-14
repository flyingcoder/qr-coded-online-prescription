<template>
  <div class="sales-report-page">
    <div class="sales-report">
      <v-card
        class="mx-auto text-center"
        color="#1ac6b6"
        dark
        max-width="600"
        rounded="10px"
      >
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .12)">
            <v-sparkline
              :value="sales_rate"
              color="rgba(255, 255, 255, .7)"
              height="100"
              padding="24"
              stroke-linecap="round"
              class="sales-graph"
            >
              <template #label="item" class="sales-graph-text">
                ${{ item.value }}
              </template>
            </v-sparkline>
          </v-sheet>
        </v-card-text>

        <v-card-text>
          <div class="text-h4 sales-title">Sales Last 24h</div>
        </v-card-text>
      </v-card>
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
          :value="value"
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
          <v-icon color="white" size="50px">mdi-currency-usd</v-icon>
        </div>
        <div class="percentage">64.76%</div>
        <div class="subtitle-text">Income Rate</div>
      </div>
      <div class="right">
        <v-sparkline
          :value="value"
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
