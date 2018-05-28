class LIMEExplanation extends HTMLElement {
  constructor() {
    super();

    // Data from http://blog.fastforwardlabs.com/2017/03/09/fairml-auditing-black-box-predictive-models.html
    const data = [{
      y: [
        'Race',
        'Prior Offense',
        'Misdemeanor'
      ],
      x: [
        -0.0512,
        0.3608,
        0.2349
      ],
      marker: {
        color: [
          'rgb(235, 187, 193)',
          'rgb(198, 235, 187)',
          'rgb(198, 235, 187)'
        ]
      },
      type: 'bar',
      orientation: 'h'
    }];

    const layout = {
      title: 'Possible LIME Explanation',
      xaxis: {
        title: 'Feature Contribution'
      },
      width: 500,
      height: 300
    }

    Plotly.newPlot(this, data, layout);
  }
}

customElements.define('lime-explanation', LIMEExplanation);
