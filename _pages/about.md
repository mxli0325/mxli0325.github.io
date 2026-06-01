---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

# Educations
- *2023.09 - Now*, Xi’an Jiaotong University. 
- *2019.09 - 2023.06*, Northeastern University at Qinhuangdao.

# Publications

{% assign publications = site.publications | sort: "order" %}
{% for publication in publications %}
<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      {% if publication.venue %}<div class="badge">{{ publication.venue }}</div>{% endif %}
      {% if publication.image %}<img src='{{ publication.image }}' alt="{{ publication.title | escape }}" style="width: {{ publication.image_width | default: '100%' }};">{% endif %}
    </div>
  </div>
  <div class='paper-box-text'>
    <p><a href="{{ publication.link }}">{{ publication.title }}</a></p>
    {{ publication.content | markdownify }}
    <p class="journal-info">
      <strong>Journal:</strong> {{ publication.journal }}
      · <strong>Year:</strong> {{ publication.year }}
      · <strong>Impact Factor:</strong> {{ publication.impact_factor }}{% if publication.impact_factor_year %} ({{ publication.impact_factor_year }}){% endif %}
      · <strong>Quartile:</strong> {{ publication.quartile }}
    </p>
  </div>
</div>
{% endfor %}

# Awards

{% assign awards = site.awards | sort: "order" %}
## International / National

<div class="award-carousel award-carousel--national" data-award-carousel>
  <button class="award-carousel__button award-carousel__button--prev" type="button" aria-label="Previous awards">&lsaquo;</button>
  <div class="award-carousel__viewport">
    <div class="award-carousel__track">
{% for award in awards %}
  {% if award.level == "International" or award.level == "National" %}
      <a class="award-card" href="{{ award.certificate | relative_url | xml_escape }}" title="{{ award.date_label }} · {{ award.prize | escape }}">
        <img src="{{ award.certificate | relative_url | xml_escape }}" alt="{{ award.title | escape }}" loading="lazy">
      </a>
  {% endif %}
{% endfor %}
    </div>
  </div>
  <button class="award-carousel__button award-carousel__button--next" type="button" aria-label="Next awards">&rsaquo;</button>
</div>

<ul class="award-detail-list">
{% for award in awards %}
  {% if award.level == "International" or award.level == "National" %}
  <li><strong>{{ award.date_label }}</strong> {{ award.title }} — {{ award.prize }}</li>
  {% endif %}
{% endfor %}
</ul>

## Provincial

<div class="award-carousel award-carousel--provincial" data-award-carousel>
  <button class="award-carousel__button award-carousel__button--prev" type="button" aria-label="Previous awards">&lsaquo;</button>
  <div class="award-carousel__viewport">
    <div class="award-carousel__track">
{% for award in awards %}
  {% if award.level == "Provincial" %}
      <a class="award-card" href="{{ award.certificate | relative_url | xml_escape }}" title="{{ award.date_label }} · {{ award.prize | escape }}">
        <img src="{{ award.certificate | relative_url | xml_escape }}" alt="{{ award.title | escape }}" loading="lazy">
      </a>
  {% endif %}
{% endfor %}
    </div>
  </div>
  <button class="award-carousel__button award-carousel__button--next" type="button" aria-label="Next awards">&rsaquo;</button>
</div>

<ul class="award-detail-list">
{% for award in awards %}
  {% if award.level == "Provincial" %}
  <li><strong>{{ award.date_label }}</strong> {{ award.title }} — {{ award.prize }}</li>
  {% endif %}
{% endfor %}
</ul>
