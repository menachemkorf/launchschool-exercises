require 'pry'
class Series
  def initialize(digits)
    @digits = digits.chars.map(&:to_i)
  end

  def slices(slice_length)
    raise ArgumentError if slice_length > @digits.size
    result = []
    iterator = @digits.size - slice_length + 1

    iterator.times do |num|
      result << @digits[num, slice_length]
    end
    result
  end
end
