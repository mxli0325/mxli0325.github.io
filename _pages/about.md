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
{% for award in awards %}
<div class='paper-box award-box'>
  <div class='paper-box-image award-box-image'>
    <div>
      {% if award.level %}<div class="badge">{{ award.level }}</div>{% endif %}
      {% if award.certificate %}
      <a href="{{ award.certificate | relative_url | xml_escape }}">
        <img src="{{ award.certificate | relative_url | xml_escape }}" alt="{{ award.title_en | escape }}" loading="lazy">
      </a>
      {% endif %}
    </div>
  </div>
  <div class='paper-box-text award-box-text'>
    <div class="award-text-en">
      <p class="award-title"><strong>{{ award.title_en }}</strong></p>
      <p>{{ award.date_label }} · {{ award.prize_en }}{% if award.ranking %} <span class="award-ranking">({{ award.ranking }})</span>{% endif %}</p>
    </div>
    <div class="award-text-zh">
      <p class="award-title"><strong>{{ award.title_zh }}</strong></p>
      <p>{{ award.date_label }} · {{ award.prize_zh }}{% if award.ranking %} <span class="award-ranking">（{{ award.ranking }}）</span>{% endif %}</p>
    </div>
  </div>
</div>
{% endfor %}
