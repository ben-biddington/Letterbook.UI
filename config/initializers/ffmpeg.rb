# frozen_string_literal: true

if ENV['FFMPEG_BINARY'].present?
  FFMPEG.ffmpeg_binary = ENV['FFMPEG_BINARY']
end
