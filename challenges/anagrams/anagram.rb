class Anagram
  def initialize(subject)
    @subject = subject
  end

  def match(list)
    list.select do |matcher|
      matcher.downcase.chars.sort == @subject.downcase.chars.sort &&
      matcher.downcase != @subject.downcase
    end
  end
end
