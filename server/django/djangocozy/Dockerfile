FROM python:3.13.0a4-slim


WORKDIR /app/src/djangocozy

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirement.txt .
RUN pip install -r requirement.txt

COPY . .