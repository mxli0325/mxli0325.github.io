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

```
{% for pub in site.data.publications %}
<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge">{{ pub.journal }} {{ pub.year }}</div>
      <img src="images/Papers/{{ pub.image }}" alt="{{ pub.title }}" style="width: 100%;">
    </div>
  </div>
  <div class="paper-box-text" markdown="1">
    [{{ pub.title }}]({{ pub.link }})
    
    {{ pub.authors }}
    
    {% if pub.note != "" %}
    {{ pub.note }}
    {% endif %}
  </div>
</div>
{% endfor %}
```

# Awards

- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
