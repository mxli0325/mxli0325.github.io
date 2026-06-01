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
<ul class="award-list">
{% for award in awards %}
  <li>
    <div class="award-title"><strong>{{ award.title }}</strong></div>
    <div class="award-meta">
      {% if award.date_label %}<span>{{ award.date_label }}</span>{% endif %}
      {% if award.level %}<span>{{ award.level }}</span>{% endif %}
      {% if award.prize %}<span>{{ award.prize }}</span>{% endif %}
    </div>
    <div class="award-description">{{ award.content | markdownify }}</div>
    {% if award.certificate %}
      <a class="award-certificate" href="{{ award.certificate | relative_url | xml_escape }}">Certificate</a>
    {% endif %}
  </li>
{% endfor %}
</ul>
