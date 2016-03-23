# Bootstrap Components
This shows various Bootstrap and Bootswatch components....

## Buttons
- Large size
<div class="padded">
<button type="button" class="btn btn-lg btn-default">Default</button>
<button type="button" class="btn btn-lg btn-primary">Primary</button>
<button type="button" class="btn btn-lg btn-success">Success</button>
<button type="button" class="btn btn-lg btn-info">Info</button>
<button type="button" class="btn btn-lg btn-warning">Warning</button>
<button type="button" class="btn btn-lg btn-danger">Danger</button>
</div>
- Small size buttons with badges
<div class="padded">
<button type="button" class="btn btn-sm btn-default">Default <span class="badge">1</span></button>
<button type="button" class="btn btn-sm btn-primary">Primary <span class="badge">2</span></button>
<button type="button" class="btn btn-sm btn-success">Success <span class="badge">3</span></button>
<button type="button" class="btn btn-sm btn-info">Info <span class="badge">4</span></button>
<button type="button" class="btn btn-sm btn-warning">Warning <span class="badge">5</span></button>
<button type="button" class="btn btn-sm btn-danger">Danger <span class="badge">6</span></button>
</div>

## Alerts
<div class="padded">
<div class="alert alert-success" role="alert">
  <strong>Alert-Success</strong> Well done! You successfully read this important alert message.
</div>
<div class="alert alert-info" role="alert">
  <strong>Alert-Info</strong> Heads up! This alert needs your attention, but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Alert-Warning</strong> Warning! Better check yourself, you're not looking too good.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Alert-Danger</strong> Oh snap!Change a few things up and try submitting again.
</div>
</div>

## Labels
<span class="label label-default">Default</span>
<span class="label label-primary">Primary</span>
<span class="label label-success">Success</span>
<span class="label label-info">Info</span>
<span class="label label-warning">Warning</span>
<span class="label label-danger">Danger</span>

## Panels
<div class="row">
  <div class="col-sm-4">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Panel title [Default]</h3>
      </div>
      <div class="panel-body">
        Panel content
      </div>
    </div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Panel title [Primary]</h3>
      </div>
      <div class="panel-body">
        Panel content
      </div>
    </div>
  </div><!-- /.col-sm-4 -->
  <div class="col-sm-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">Panel title [Success]</h3>
      </div>
      <div class="panel-body">
        Panel content
      </div>
    </div>
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">Panel title [Info]</h3>
      </div>
      <div class="panel-body">
        Panel content
      </div>
    </div>
  </div><!-- /.col-sm-4 -->
  <div class="col-sm-4">
    <div class="panel panel-warning">
      <div class="panel-heading">
        <h3 class="panel-title">Panel title [Warning]</h3>
      </div>
      <div class="panel-body">
        Panel content
      </div>
    </div>
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">Panel title [Danger]</h3>
      </div>
      <div class="panel-body">
        Panel content
      </div>
    </div>
  </div><!-- /.col-sm-4 -->
</div>

## List group
- Basic list group with badges
<ul class="list-group">
  <li class="list-group-item">Cras justo odio<span class="badge">14</span></li>
  <li class="list-group-item">Dapibus ac facilisis in<span class="badge">8</span></li>
  <li class="list-group-item">Morbi leo risus<span class="badge">2</span></li>
  <li class="list-group-item">Porta ac consectetur ac<span class="badge">0</span></li>
  <li class="list-group-item">Vestibulum at eros<span class="badge">7</span></li>
</ul>
- Contextual list group
<ul class="list-group">
  <li class="list-group-item list-group-item-success">list-group-item-success</li>
  <li class="list-group-item list-group-item-info">list-group-item-info</li>
  <li class="list-group-item list-group-item-warning">list-group-item-warning</li>
  <li class="list-group-item list-group-item-danger">list-group-item-danger</li>
</ul>
- Linked item and Disabled item
<div class="list-group">
  <a href="#" class="list-group-item active">list-group-item active</a>
  <a href="#" class="list-group-item disabled">list-group-item disabled</a>
  <a href="#" class="list-group-item">Linked item</a>
  <a href="#" class="list-group-item">Linked item</a>
</div>

## Carousel
<div id="carousel-index1" class="carousel slide" data-ride="carousel" data-interval="4000">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-index1" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-index1" data-slide-to="1"></li>
    <li data-target="#carousel-index1" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item active">
      <img src="/images/caro1.png" alt="...">
      <div class="carousel-caption">
          <h3>Seattle view from Alki beach</h3>
      </div>
    </div>
    <div class="item">
      <img src="/images/caro2.png" alt="...">
      <div class="carousel-caption">
          <h3>Myself at Gaswork park</h3>
      </div>
    </div>
    <div class="item">
      <img src="/images/caro3.jpg" alt="...">
      <div class="carousel-caption">
          <h3>University of Cambridge</h3>
      </div>
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-index1" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#carousel-index1" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div> <!-- Carousel -->
