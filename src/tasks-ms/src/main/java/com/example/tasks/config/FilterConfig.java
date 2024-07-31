package com.example.tasks.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.tasks.filter.CustomCorsFilter;

@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean<CustomCorsFilter> corsFilterRegistrationBean() {
        FilterRegistrationBean<CustomCorsFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new CustomCorsFilter());
        registrationBean.addUrlPatterns("/api/*");
        return registrationBean;
    }
}
