class FairMLPlot extends HTMLElement {
  constructor() {
    super();

    // Data from http://blog.fastforwardlabs.com/2017/03/09/fairml-auditing-black-box-predictive-models.html
    const data = [{
      x: [
        'Misdemeanor',
        'Hispanic',
        'Age Above FourtyFive',
        'Other',
        'Asian',
        'Native American',
        'Female',
        'Age Below TwentyFive',
        'Two Year Recidivism',
        'African American',
        'Number of Priors',
      ],
      y: [
        -0.05266,
        -0.008425,
        -0.006805,
        -0.004861,
        -0.00032404,
        0.0004861,
        0.045366,
        0.1533,
        0.2289,
        0.2349,
        0.3608
      ],
      marker: {
        color: [
          '#49e8f5',
          '#49e8f5',
          '#49e8f5',
          '#49e8f5',
          '#49e8f5',
          '#f24245',
          '#f24245',
          '#f24245',
          '#f24245',
          '#f24245',
          '#f24245'
        ]
      },
      type: 'bar'
    }];

    const layout = {
      title: 'COMPAS Feature Dependence',
      yaxis: {
        title: 'Relative Feature Importance'
      }
    }

    Plotly.newPlot(this, data, layout);
  }
}

customElements.define('fairml-plot', FairMLPlot);
